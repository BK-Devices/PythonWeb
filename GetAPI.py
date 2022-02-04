import pymysql as my
from flask import Flask
from flask_restful import Resource,Api

app=Flask(__name__)
api=Api(app)

class Car(Resource):
    def get(self, model):
        dic={}
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

class Customer(Resource):
    def get(self, id):
        dic={}
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

api.add_resource(Car, '/car/<model>')
api.add_resource(Customer, '/cust/<id>')
app.run(debug=True)