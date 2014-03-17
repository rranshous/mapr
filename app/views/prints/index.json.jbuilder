json.array!(@prints) do |print|
  json.extract! print, :id, :left, :left, :right, :top, :bottom
  json.url print_url(print, format: :json)
end
