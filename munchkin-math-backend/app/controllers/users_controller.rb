class UsersController < ApplicationController

    def index
        users = User.all
        render json: users,
        except: [:updated_at, :created_at],
        include: [
          {
            :tests => {
              except: [:updated_at, :created_at]
            },
            :userTests => {
              except: [:updated_at, :created_at]
            }
          }
        ]
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user,
        except: [:updated_at, :created_at],
        include: [
          {
            :tests => {
              except: [:updated_at, :created_at]
            },
            :userTests => {
              except: [:updated_at, :created_at]
            }
          }
        ]
    end

    def new
      user = User.new
    end

    def create
      user = User.new(params[:id, :name, :color, :age])
    end

    def destroy
      user = User.find_by(id: params[:id])
      user.destroy
      render json: {message: "User Successfully Deleted"}
    end

end
