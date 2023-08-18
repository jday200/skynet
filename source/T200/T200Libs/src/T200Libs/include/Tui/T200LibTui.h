#ifndef T200LIBTUI_H
#define T200LIBTUI_H

#include "T200Class.h"
#include "T200Common.h"
#include "T200String.h"


class T200LibTui : public T200Class
{
    public:
        T200LibTui();
        virtual ~T200LibTui();

        T200VOID            print(T200String);

    protected:

    private:
};

#endif // T200LIBTUI_H
