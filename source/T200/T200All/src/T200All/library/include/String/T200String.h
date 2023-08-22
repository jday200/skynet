#ifndef T200STRING_H
#define T200STRING_H

#include <iostream>
#include "T200Common.h"


class T200String
{
    public:
        T200String();
        T200String(const char*);
        virtual ~T200String();

        friend std::ostream & operator << (std::ostream&, const T200String&);

    protected:
        std::string             m_string;

    private:
};

#endif // T200STRING_H
