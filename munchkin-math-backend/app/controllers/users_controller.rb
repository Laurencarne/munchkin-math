class UsersController < ApplicationController

  def index
      users = User.all
      render json: users
      # except: [:updated_at, :created_at],
      # include: [
      #   {
      #     :tests => {
      #       except: [:updated_at, :created_at]
      #     },
      #     :userTests => {
      #       except: [:updated_at, :created_at]
      #     }
      #   }
      # ]
  end

  def show
      user = User.find_by(id: params[:id])
      render json: user
      # except: [:updated_at, :created_at],
      # include: [
      #   {
      #     :tests => {
      #       except: [:updated_at, :created_at]
      #     },
      #     :userTests => {
      #       except: [:updated_at, :created_at]
      #     }
      #   }
      # ]
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def update
    user = User.find_by(id: params[:id])
    user.update(user_params)
    render json: user
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    render json: {message: "User Successfully Deleted"}
  end

  def user_params
    params.require(:user).permit(:name, :color, :age, :avatar)
  end

end
