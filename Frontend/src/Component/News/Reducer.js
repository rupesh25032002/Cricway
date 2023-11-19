
const Reducer = (state,action) =>{
   switch(action.type){
    
    case "SET_LOADING":
      return{
        ...state,
        isLoading:true,
        
      }

     case "GET_STORIES":
       return {
         ...state,
         isLoading:false,
         articles:action.payload.articles,
         totalResults:action.payload.totalResults,
       }

       case "NEXT_PAGE":
        let pageNum = state.page+1;
        let limit = Math.ceil(state.totalResults/20);
        
         if(pageNum >= limit)
          pageNum=limit;
        return{
          ...state,
          page:pageNum
        }

       case "PREV_PAGE":
        let pagenum = state.page-1;
        if(pagenum <= 1)
        pagenum=1;
        return{
          ...state,
          page:pagenum,
        }
   }
return state;
}

export default Reducer;