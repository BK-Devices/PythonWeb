from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import *
import json

def index(request): return render(request,'Index.html')

def admin(request):
    if request.method == "POST":
        try:
            id = request.POST['uid']
            obj = user()
            nm = obj.userName(id)
            return render(request, 'Admin.html', {'User' : nm})
        except: return render(request,'Index.html')

def checkId(request):
    mess = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            id = dic['Id']
            obj = user()
            mess = obj.checkId(id)
        except: mess = None
    return HttpResponse(mess)

def signIn(request):
    mess = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            id = dic['Id']
            psw = dic['Password']
            obj = user()
            mess = obj.signIn(id, psw)
        except: mess = None
    return HttpResponse(mess)

def signUp(request):
    mess = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            id = dic['Id']
            nm = dic['Name']
            em = dic['Email']
            psw = dic['Password']
            obj = user()
            mess = obj.signUp(id, nm, em, psw)
        except: mess = None
    return HttpResponse(mess)

def searchCar(request):
    result = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            ty = dic['Type']
            nm = dic['Name']
            obj = cars()
            result = obj.searchCar(ty, nm)
        except: result = None
    # return HttpResponse(json.dumps({"result":result}), content_type="aplication/json")
    return JsonResponse({'result': result})

def newCar(request):
    result = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            mod = dic['Model']
            comp = dic['Company']
            typ = dic['Type']
            eng = dic['Engine']
            mil = dic['Mileage']
            tran = dic['Transmission']
            ful = dic['Fuel']
            pho = dic['Photo']
            pri = dic['Price']
            obj = cars()
            result = obj.newCar(mod, comp, typ, eng, mil, tran, ful, pho, pri)
        except: result = "Error"
    return JsonResponse({'result': result})

def editCar(request):
    result = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            mod = dic['Model']
            pri = dic['Price']
            obj = cars()
            result = obj.editCar(mod, pri)
        except: result = 'Error'
    return JsonResponse({'result': result})

def carReport(request):
    result = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            ty = dic['Type']
            obj = report()
            result = obj.showReport(ty)
        except: result = None
    return JsonResponse({'result': result})

def searchCust(request):
    result = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            ty = dic['Type']
            nm = dic['Name']
            obj = customers()
            result = obj.searchCust(ty, nm)
        except: result = None
    return JsonResponse({'result': result})

def newCust(request):
    result = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            nm = dic['Name']
            em = dic['Email']
            mo = dic['Mobile']
            add = dic['Address']
            obj = customers()
            result = obj.newCust(nm, em, mo, add)
        except: result = "Error"
    return JsonResponse({'result': result})

def editCust(request):
    result = None
    if request.method == "GET":
        try:
            data = request.GET['data']
            dic = json.loads(data)
            id = dic['Id']
            mo = dic['Mobile']
            obj = customers()
            result = obj.editCust(id, mo)
        except: result = None
    return JsonResponse({'result': result})