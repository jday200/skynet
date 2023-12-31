#ifndef T200TUIWIN10_H
#define T200TUIWIN10_H

#include "T200Common.h"
#include "Tui/T200Tui.h"


class T200TuiWin10 : public T200Tui
{
    public:
        T200TuiWin10();
        virtual ~T200TuiWin10();

        T200VOID            moveto(T200INT, T200INT);

        T200VOID            print(T200String);

    protected:

    private:
};

#endif // T200TUIWIN10_H
