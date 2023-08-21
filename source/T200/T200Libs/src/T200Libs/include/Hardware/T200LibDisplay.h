#ifndef T200LIBDISPLAY_H
#define T200LIBDISPLAY_H

#include "T200Common.h"
#include "T200String.h"

#include "Win10/Tui/T200TuiWin10.h"


typedef enum {
    T200DISPLAY_TEXT_MODE,
    T200DISPLAY_GRAPHICS_MODE
}T200DISPLAY_MODE;


class T200LibDisplay : public T200TuiWin10
{
    public:
        T200LibDisplay();
        virtual ~T200LibDisplay();

        T200BOOL         setMode(T200DISPLAY_MODE);

        T200VOID         print(T200String);

    protected:

    private:
};

#endif // T200LIBDISPLAY_H
