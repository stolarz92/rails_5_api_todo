class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy, :change_todo_status]

  # GET /todos
  def index
    # get current user todos
    @todos = current_user.todos
    json_response(@todos)
  end

  # POST /todos
  def create
    @todo = current_user.todos.create!(todo_params)
    json_response(@todo, :created)
  end

  # GET /todos/:id
  def show
    json_response(@todo)
  end

  # PUT /todos/:id
  def update
    @todo.update(todo_params)
    head :no_content
  end

  # DELETE /todos/:id
  def destroy
    @todo.destroy
    head :no_content
  end

  def change_todo_status
    binding.pry
    @todo.done = !@todo.done
    if @todo.save
      render json: @todo, status: :ok
    else
      render json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end

  private

  def todo_params
    # whitelist params
    params.require(:todo).permit(:title, :description, :done)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end
end
