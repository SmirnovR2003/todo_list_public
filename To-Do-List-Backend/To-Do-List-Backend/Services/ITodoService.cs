using To_Do_List_Backend.Domain;
using To_Do_List_Backend.Dto;

namespace To_Do_List_Backend.Services
{
    public interface ITodoService
    {
        List<Todo> GetTodos();
        Todo GetTodo( int todoId );
        Todo CompleteTodo( int todoId );
        Todo CreateTodo( TodoDto todo );
        void DeleteTodo( int todoId );
    }
}
