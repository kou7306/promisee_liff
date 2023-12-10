# main.py
from flask import Flask, render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit_response',methods={"POST"})
def submit():
    user_name = request.form.get('user_name')
    response_type = request.form.get('response_type')

    new_response = Response(user_name=user_name, response_type=response_type)
    db.session.add(new_response)
    db.session.commit()

    return 'Response submitted successfully!'
a


if __name__ == '__main__':
    app.run(debug=True)
