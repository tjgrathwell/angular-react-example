Rails.application.routes.draw do
  root 'table_rendering#index'
  get '/angular' => 'table_rendering#angular'
  get '/react' => 'table_rendering#react'
  get '/books' => 'table_rendering#books'
end
