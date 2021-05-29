class SessionsController < ApplicationController 

    def new 

    end

    def create 
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
        session[:user_id] = user.id 
        flash[:success] = "you have successfully logged in!!" #success and error are the classes we will used to design messages
        redirect_to root_path
    else 
        flash.now[:error] = "There was something wrong with your login information"
        render 'new'
    end
    end

    def destroy 
    session[:user_id] = nil
    flash[:success] = "you have successfully logged out"
    redirect_to login_path
    end

end