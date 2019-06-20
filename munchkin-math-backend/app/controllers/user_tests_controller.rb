class UserTestsController < ApplicationController
    def index
        usertests = UserTest.all
        render json: usertests,
        except: [:updated_at, :created_at],
        include: [
          {
            :test => {
              except: [:updated_at, :created_at]
            },
            :user => {
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
            },
            :user => {
              except: [:updated_at, :created_at]
            }
          }
        ]
    end

      def create
        newUserTest = UserTest.create(userTest_params)
        render json: newUserTest
      end

      def userTest_params
        params.require(:user_test).permit(:user_id, :test_id, :score)
        # , :user_id, :test_id, :score
      end
end
