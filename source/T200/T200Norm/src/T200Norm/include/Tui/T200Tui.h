#ifndef T200TUI_H
#define T200TUI_H


#include "T200Common.h"
#include "String/T200String.h"


class T200Tui
{
    public:
        T200Tui();
        virtual ~T200Tui();

        virtual T200VOID        print(T200String);
        virtual T200VOID        moveto(T200INT, T200INT);

    protected:

    private:
};

#endif // T200TUI_H
