#include <iostream>

int main ()
{
    float luas, panjang, lebar;

    std::cout << "PROGRAM C++ MENGHITUNG LUAS PERSEGI PANJANG" << std::endl;
    std::cout << "---------------------------------" << std::endl;
    std::cout << "Masukan Panjang  : ";
    std::cin  >> panjang;
    std::cout << "Masukan Lebar    : ";
    std::cin  >> lebar;
    luas = panjang * lebar ;
    std::cout << "Luas Persegi Panjang : "<<luas<<std::endl;
    return 0;
}
