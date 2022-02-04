import pymysql as my
import random

class user():
    def checkId(self, id):
        mess = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            curs.execute("select * from Users where user = '%s'" %id)
            data = curs.fetchall()
            if data: mess = 'Yes'
            else: mess = 'No'
            con.close()
        except: mess = None
        return mess
    
    def signIn(self, id, psw):
        mess = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            curs.execute("select * from Users where user = '%s'" %id)
            data = curs.fetchall()
            if data:
                if data[0][3].upper() == psw.upper(): mess = 'Yes'
                else: mess = 'No'
            else: mess = 'No'
            con.close()
        except: mess = None
        return mess

    def signUp(self, id, nm, em, psw):
        mess = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            curs.execute("select * from Users where user = '%s'" %id)
            data = curs.fetchall()
            if data: mess = 'No'
            else:
                curs.execute("insert into Users values('%s', '%s', '%s', '%s')" %(id, nm, em, psw))
                con.commit()
                curs.execute("select * from Users where user = '%s'" %id)
                data = curs.fetchall()
                if data: mess = 'Yes'
                else: mess = None
            con.close()
        except: mess = None
        return mess
    
    def userName(self, id):
        nm = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            curs.execute("select * from Users where user = '%s'" %id)
            data = curs.fetchall()
            nm = data[0][1]
            con.close
        except: nm = None
        return nm

class report():
    def editReport(self, ty, nm):
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            if ty.upper() == 'MODEL':
                curs.execute("select * from Modl_Report where model = '%s'" %nm)
                data = curs.fetchall()
                if data: curs.execute("update Modl_Report set mosearch = mosearch + 1 where model = '%s'" %nm)
                else: curs.execute("insert into Modl_Report values('%s', %d)" %(nm.capitalize(), 1))
                con.commit()
                
            elif ty.upper() == 'TYPE':
                curs.execute("select * from Type_Report where type = '%s'" %nm)
                data = curs.fetchall()
                if data: curs.execute("update Type_Report set tysearch = tysearch + 1 where type = '%s'" %nm)
                else: curs.execute("insert into Type_Report values('%s', %d)" %(nm.capitalize(), 1))
                con.commit()
        
            elif ty.upper() == 'COMPANY':
                curs.execute("select * from Comp_Report where company = '%s'" %nm)
                data = curs.fetchall()
                if data: curs.execute("update Comp_Report set comsearch = comsearch + 1 where company = '%s'" %nm)
                else: curs.execute("insert into Comp_Report values('%s', %d)" %(nm.capitalize(), 1))
                con.commit()
            con.close()
        except: pass
    
    def showReport(self, ty):
        result = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            result = []
            
            if ty.upper() == 'MODEL':
                curs.execute("select * from Modl_Report")
                data = curs.fetchall()
                if data:
                    result.append(['Model', 'Searches'])
                    for rec in data: result.append([rec[0], rec[1]])
                
            elif ty.upper() == 'TYPE':
                curs.execute("select * from Type_Report")
                data = curs.fetchall()
                if data:
                    result.append(['Type', 'Searches'])
                    for rec in data: result.append([rec[0], rec[1]])
            
            elif ty.upper() == 'COMPANY':
                curs.execute("select * from Comp_Report")
                data = curs.fetchall()
                if data:
                    result.append(['Company', 'Searches'])
                    for rec in data: result.append([rec[0], rec[1]])
            con.close()
        except: result = None
        return result

class cars():
    def searchCar(self, ty, nm):
        result = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            if ty.upper() == 'MODEL': curs.execute("select * from Cars where model = '%s'" %nm)
            elif ty.upper() == 'TYPE': curs.execute("select * from Cars where type = '%s'" %nm)
            elif ty.upper() == 'COMPANY': curs.execute("select * from Cars where company = '%s'" %nm)
            elif ty.upper() == 'ALL': curs.execute("select * from Cars")

            data = curs.fetchall()
            if data:
                obj = report()
                obj.editReport(ty, nm)
                result = {}
                i = 0
                for rec in data:
                    result[i] = {}
                    result[i]['Model'] = rec[0]
                    result[i]['Company'] = rec[1]
                    result[i]['Type'] = rec[2]
                    result[i]['Engine'] = rec[3]
                    result[i]['Mileage'] = rec[4]
                    result[i]['Transmission'] = rec[5]
                    result[i]['Fuel'] = rec[6]
                    result[i]['Photo'] = rec[7]
                    result[i]['Price'] = rec[8]
                    i += 1
            else: result = 'Empty'
            con.close()
        except: result = None
        return result
    
    def newCar(self, mod, comp, typ, eng, mil, tran, ful, pho, pri):
        result = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            curs.execute("select * from Cars where model = '%s'" %mod)
            data = curs.fetchall()
            if data: result = "Found"
            else:
                curs.execute("insert into Cars values('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')" %(mod, comp, typ, eng, mil, tran, ful, pho, pri))
                con.commit()
                obj = cars()
                result = obj.searchCar("Model", mod)
            con.close()
        except: result = None
        return result
    
    def editCar(self, mod, pri):
        result = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            curs.execute("select * from Cars where model = '%s'" %mod)
            data = curs.fetchall()
            if data:
                curs.execute("update Cars set price = '%s' where model = '%s'" %(pri, mod))
                con.commit()
                obj = cars()
                result = obj.searchCar("Model", mod)
            else: result = 'Empty'
            con.close()
        except: result = None
        return result
    
class customers():
    def searchCust(self, ty, nm):
        result = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            if ty.upper() == 'ID': curs.execute("select * from Customers where custid = '%s'" %nm)
            elif ty.upper() == 'NAME': curs.execute("select * from Customers where name = '%s'" %nm)
            elif ty.upper() == 'ALL': curs.execute("select * from Customers")
            
            data = curs.fetchall()
            if data:
                result = {}
                i = 0
                for rec in data:
                    result[i] = {}
                    result[i]['Id'] = rec[0]
                    result[i]['Name'] = rec[1]
                    result[i]['Email'] = rec[2]
                    result[i]['Mobile'] = rec[3]
                    result[i]['Address'] = rec[4]
                    i += 1
            else: result = 'Empty'
            con.close()
        except: result = None
        return result
    
    def newCust(self, nm, em, mo, ad):
        result = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
    
            ch = 'Y'
            while ch == 'Y':
                id = nm.split(' ')[0] + str(random.randrange(1000, 10000))
                curs.execute("select * from Customers where custid = '%s'" %id)
                data = curs.fetchall()
                if data: ch = 'Y'
                else: ch = 'N'
            curs.execute("insert into Customers values('%s', '%s', '%s', '%s', '%s')" %(id, nm, em, mo, ad))
            con.commit()
            obj = customers()
            result = obj.searchCust('Id', id)
            con.close()
        except: result = None
        return result
    
    def editCust(self, id, mo):
        result = None
        try:
            con = my.connect(host='bjcu0zbekj0zsyjkre50-mysql.services.clever-cloud.com', user='ubqfrixkywybpwio', password='ddXa2iftDKRei4WVSL8O', database='bjcu0zbekj0zsyjkre50')
            curs = con.cursor()
            curs.execute("select * from Customers where custid = '%s'" %id)
            data = curs.fetchall()
            if data:
                curs.execute("update Customers set mobile = '%s' where custid = '%s'" %(mo, id))
                con.commit()
                obj = customers()
                result = obj.searchCust('Id', id)
            else: result = 'Empty'
            con.close()
        except: result = None
        return result