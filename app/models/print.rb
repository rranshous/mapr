class Print < ActiveRecord::Base
  def generate_stl
    generate = fork do
      puts "starting generation"
      exec "generate_stl #{self.generate_args}"
    end
    Process.detach(generate)
    puts "waiting on generate"
    Process.wait(generate) rescue 0
    puts "done generating"
  end

  def generate_args
    "#{self.left} #{self.top} #{self.right} #{self.bottom} #{self.file_path}"
  end

  def file_path
    "out/#{self.id}.stl"
  end
end
