class TableRenderingController < ApplicationController
  def index

  end

  def angular

  end

  def react

  end

  def books
    render json: Book.all(params[:count].to_i || 10)
  end
end
