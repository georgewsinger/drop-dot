goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31430__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31431__i = 0, G__31431__a = new Array(arguments.length -  0);
while (G__31431__i < G__31431__a.length) {G__31431__a[G__31431__i] = arguments[G__31431__i + 0]; ++G__31431__i;}
  args = new cljs.core.IndexedSeq(G__31431__a,0);
} 
return G__31430__delegate.call(this,args);};
G__31430.cljs$lang$maxFixedArity = 0;
G__31430.cljs$lang$applyTo = (function (arglist__31432){
var args = cljs.core.seq(arglist__31432);
return G__31430__delegate(args);
});
G__31430.cljs$core$IFn$_invoke$arity$variadic = G__31430__delegate;
return G__31430;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31433__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31434__i = 0, G__31434__a = new Array(arguments.length -  0);
while (G__31434__i < G__31434__a.length) {G__31434__a[G__31434__i] = arguments[G__31434__i + 0]; ++G__31434__i;}
  args = new cljs.core.IndexedSeq(G__31434__a,0);
} 
return G__31433__delegate.call(this,args);};
G__31433.cljs$lang$maxFixedArity = 0;
G__31433.cljs$lang$applyTo = (function (arglist__31435){
var args = cljs.core.seq(arglist__31435);
return G__31433__delegate(args);
});
G__31433.cljs$core$IFn$_invoke$arity$variadic = G__31433__delegate;
return G__31433;
})()
;

return null;
});
