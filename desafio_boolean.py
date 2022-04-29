num_int = input('Digite um numero interio: ')
par_impar = num_int.isnumeric() % 2

if num_int.isnumeric() and par_impar == 0:
    print('PAR')
elif num_int.isnumeric() and par_impar != 0:
    print('IMPAR')
else:
    print('ERRO')
