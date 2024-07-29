import{a8 as c,a9 as r}from"./index-f3a8f3ae.js";const p=c("tasks",{state:()=>({tasks:[],priori:[],complexity:[],users:[],taskStatus:[],toEdit:{},toShow:{},toDelete:{},toShowChat:{},toAddChat:{},taskFiles:[],search:"",taskStatistics:{}}),actions:{async getTasks(t="",s="0"){try{const a=await r.get("api/tasks",{params:{search:t,segment:s}});this.tasks=a.data}catch(a){console.error("Error fetching tasks:",a)}},async getPriorities(){try{const t=await r.get("api/priorities");this.priori=t.data.data}catch(t){console.error("Error fetching priorities:",t)}},async getComplexities(){try{const t=await r.get("api/complexities");this.complexity=t.data.data}catch(t){console.error("Error fetching complexities:",t)}},async getUsers(){try{const t=await r.get("api/users");this.users=t.data.data}catch(t){console.error("Error fetching users:",t)}},async getTasksStatus(){try{const t=await r.get("api/tasks-status");this.taskStatus=t.data.data}catch(t){console.error("Error fetching task statuses:",t)}},async storeTask(t,s){try{const o=(await r.post("api/tasks",t)).data;if(await this.getTasks(),s&&s.length>0){const e=new FormData;e.append("task_id",o.id);for(const i of s)e.append("files[]",i);await this.uploadTaskFile(e)}return o}catch(a){console.error("Error storing task:",a)}},async updateTask(t,s){try{const o=(await r.put(`api/tasks/${t}`,s)).data.data,e=this.tasks.findIndex(i=>i.id===t);this.tasks.splice(e,1,o),await this.getTasks()}catch(a){console.error("Error updating task:",a)}},async deleteTask(t){try{await r.delete(`api/tasks/${t}`);const s=this.tasks.findIndex(a=>a.id===t);this.tasks.splice(s,1)}catch(s){console.error("Error deleting task:",s)}},async uploadTaskFile(t){try{return(await r.post("api/task-file",t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(s){throw console.error("Error uploading task file:",s),s}},async getTaskFiles(t){try{const s=await r.get(`api/task-file/${t}`);this.taskFiles=s.data.data}catch(s){console.error("Error fetching task files:",s)}},async deleteTaskFile(t){try{await r.delete(`api/task-file/${t}`);const s=this.taskFiles.findIndex(a=>a.id===t);s!==-1&&this.taskFiles.splice(s,1)}catch(s){console.error("Error deleting task file:",s)}},async fetchTaskStatistics(){try{const t=await r.get("api/tasks/statistics");this.taskStatistics=t.data}catch(t){console.error("Error fetching task statistics:",t)}}}});export{p as u};