class UserTestsController < ApplicationController
    def index
        usertests = UserTest.all
        render json: usertests,
        except: [:updated_at, :created_at],
        include: [
          {
            :test => {
              except: [:updated_at, :created_at]
            }
          }
        ]
    end

    def show
        usertest = UserTest.find_by(id: params[:id])
        render json: usertest,
        except: [:updated_at, :created_at],
        include: [
          {
            :test => {
              except: [:updated_at, :created_at]
            }
          }
        ]
    end
end
