#ifndef T200TUIBASE_H
#define T200TUIBASE_H

#include "T200Common.h"
#include "T200String.h"


class T200TuiBase
{
    public:
        T200TuiBase();
        virtual ~T200TuiBase();

        virtual T200VOID            moveto(T200INT, T200INT) = 0;
        virtual T200VOID            print(T200String) = 0;

        virtual T200VOID            settextcolor(T200INT) = 0;
        virtual T200VOID            setbackgroundcolor(T200INT) = 0;

        virtual T200VOID            clear() = 0;

    protected:

    private:
};

#endif // T200TUIBASE_H
