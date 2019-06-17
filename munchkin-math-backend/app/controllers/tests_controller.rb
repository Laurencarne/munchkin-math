class TestsController < ApplicationController

    def index
        tests = Test.all
        render json: tests,
        except: [:updated_at, :created_at],
        include: [
          {
            :users => {
              except: [:updated_at, :created_at]
            }
          },
          {
            :questions => {
              except: [:updated_at, :created_at]
            }
          }
        ]
    end

    def show
        test = Test.find_by(id: params[:id])
        render json: test,
        except: [:updated_at, :created_at],
        include: [
          {
            :users => {
              except: [:updated_at, :created_at]
            }
          },
          {
            :questions => {
              except: [:updated_at, :created_at]
            }
          }
        ]
    end

end
