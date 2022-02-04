import pymysql as my
from flask import Flask, request

app=Flask(__name__)
@app.route('/car', methods=['POST'])

def car():
    dic={}
    model = request.form.get('model')
    try:
        con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
        curs = con.cursor()
        curs.execute("select * from Cars where model = '%s'" %model)
        data = curs.fetchall()
        if data:
            dic['Model'] = data[0][0]
            dic['Company'] = data[0][1]
            dic['Type'] = data[0][2]
            dic['Engine'] = data[0][3]
            dic['Mileage'] = data[0][4]
            dic['Transmission'] = data[0][5]
            dic['Fuel'] = data[0][6]
            dic['Photo'] = data[0][7]
            dic['Price'] = data[0][8]
        else:
            dic['Result'] = 'Car Not Found'
        con.close()
    except:
        dic['Result'] = 'Failed to Connect'
    return dic

app.run(debug=True)