import pymysql as my
from flask import Flask, request

app=Flask(__name__)
@app.route('/add', methods=['POST'])

def customer():
    dic={}
    id = request.form.get('id')
    try:
        con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
        curs = con.cursor()
        curs.execute("select * from Customers where custid = '%s'" %id)
        data = curs.fetchall()
        if data:
            dic['Id'] = data[0][0]
            dic['Name'] = data[0][1]
            dic['Email'] = data[0][2]
            dic['Mobile'] = data[0][3]
            dic['Address'] = data[0][4]
        else:
            dic['Result'] = 'Customer Not Found'
        con.close()
    except:
        dic['Result'] = 'Failed to Connect'
    return dic

app.run(debug=True)