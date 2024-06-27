def hitung_harga_pertamax(harga_per_liter, jumlah_liter):
    total_harga = harga_per_liter * jumlah_liter
    return total_harga

harga_pertamax_per_liter = float(input("Masukkan Harga Pertamax Perliter: "))

print("*************************************************************************************************************************")
print("*****************************************************Fico Aldi Saputro***************************************************")
print("***************************************************** A12.2023.07058*****************************************************")
print("*****************************************Aplikasi Pencetak Liter Pertamax dan Harga**************************************")
print("*************************************************************************************************************************")
for i in range(1, 41):
    jumlah_liter = i * 1.0
    total_harga = hitung_harga_pertamax(harga_pertamax_per_liter, jumlah_liter)
    print(f"{i} x {harga_pertamax_per_liter:.1f} = {total_harga:.1f}",end="\t\t")

    if i % 4 == 0:
      print()

print("\n*************************************************************************************************************************")
