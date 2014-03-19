Mapr::Application.routes.draw do

  get "choose_map", to: "prints#choose_bbox", as: 'choose_map'
  post "generate_sti", to: "prints#generate_sti", as: 'generate_sti'
  get "stl_data/:id", to: "prints#stl_data", as: 'stl_data'
  get "choose_scale/:id", to: "prints#choose_scale", as: 'choose_scale'
  post "save_scale/:id", to: "prints#save_scale", as: 'save_scale'

  resources :prints
end
