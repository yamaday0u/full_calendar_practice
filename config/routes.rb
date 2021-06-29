Rails.application.routes.draw do
  scope 'spa' do
    get '*path', to: 'spa_roots#show'
  end
end
