class PrintsController < ApplicationController
  before_action :set_print, only: [:show, :edit, :update, :destroy, :choose_scale]


  def choose_bbox
  end

  def choose_scale
  end

  def generate_sti
    left, top, right, bottom = params[:latlong].split(',')
    print = Print.create(left:left, top:top, right:right, bottom:bottom)
    print.generate_stl
    redirect_to choose_scale_path(print.id)
  end

  def wait_for_sti
  end

  # GET /prints
  # GET /prints.json
  def index
    @prints = Print.all
  end

  # GET /prints/1
  # GET /prints/1.json
  def show
  end

  # GET /prints/new
  def new
    @print = Print.new
  end

  # GET /prints/1/edit
  def edit
  end

  # POST /prints
  # POST /prints.json
  def create
    @print = Print.new(print_params)

    respond_to do |format|
      if @print.save
        format.html { redirect_to @print, notice: 'Print was successfully created.' }
        format.json { render action: 'show', status: :created, location: @print }
      else
        format.html { render action: 'new' }
        format.json { render json: @print.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /prints/1
  # PATCH/PUT /prints/1.json
  def update
    respond_to do |format|
      if @print.update(print_params)
        format.html { redirect_to @print, notice: 'Print was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @print.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /prints/1
  # DELETE /prints/1.json
  def destroy
    @print.destroy
    respond_to do |format|
      format.html { redirect_to prints_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_print
      @print = Print.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def print_params
      params.require(:print).permit(:left, :right, :top, :bottom)
    end
end
