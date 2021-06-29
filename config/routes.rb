Rails.application.routes.draw do
  get 'spa_roots/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope 'spa' do
    get '*path', to: 'spa_roots#show'
  end
end
