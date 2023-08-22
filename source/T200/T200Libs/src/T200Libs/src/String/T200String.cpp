#include "T200String.h"

#include <string.h>


T200String::T200String()
{
    //ctor
}

T200String::T200String(const char* msg)
{
    //ctor
    int i;
    i = strlen(msg);

    if(i >= 0){
        m_string = new char[i + 2];
        strcpy(m_string, msg);
    }

}

T200String::~T200String()
{
    //dtor

    if(m_string){
        //delete[] m_string;
    }
}
