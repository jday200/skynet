#ifndef T200WIN10TUI_H
#define T200WIN10TUI_H

#include "T200TuiBase.h"


class T200Win10Tui
{
    public:
        T200Win10Tui();
        virtual ~T200Win10Tui();

        T200VOID            moveto(T200INT, T200INT);
        T200VOID            print(T200String);

    protected:

    private:
};

#endif // T200WIN10TUI_H
