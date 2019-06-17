class UserTestsController < ApplicationController
    def index
        usertests = UserTest.all
        render json: usertests
    end

    def show
        usertest = UserTest.find_by(id: params[:id])
        render json: usertest
    end
end
