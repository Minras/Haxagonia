from flask import Flask, render_template

app = Flask(__name__)

# TODO Move debug mode to configuration
@app.route('/')
def index():
    return 'Homepage'

@app.route('/profile')
def profile():
    return 'Own profile info'

@app.route('/user/<username>')
def show_user_profile(username):
    return 'Viewing profile of %s' % username

@app.route('/field')
def field():
    return render_template('field.html', data='xxx')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
