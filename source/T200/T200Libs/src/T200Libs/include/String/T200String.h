#ifndef T200STRING_H
#define T200STRING_H

#include <iostream>

#include "T200Common.h"

class T200String;
//std::ostream & std::ostream::operator <<  (const T200String& msg);

class T200String
{
    public:
        T200String();
        T200String(const char*);
        virtual ~T200String();

        //friend std::ostream & std::ostream::operator << (std::ostream & output, const T200String &msg);
        friend std::ostream & operator<<( std::ostream & os,const T200String & c);

    protected:
        char*           m_string    = T200NULL;

    private:
};

#endif // T200STRING_H
