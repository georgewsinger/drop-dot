goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21967__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21968__i = 0, G__21968__a = new Array(arguments.length -  0);
while (G__21968__i < G__21968__a.length) {G__21968__a[G__21968__i] = arguments[G__21968__i + 0]; ++G__21968__i;}
  args = new cljs.core.IndexedSeq(G__21968__a,0);
} 
return G__21967__delegate.call(this,args);};
G__21967.cljs$lang$maxFixedArity = 0;
G__21967.cljs$lang$applyTo = (function (arglist__21969){
var args = cljs.core.seq(arglist__21969);
return G__21967__delegate(args);
});
G__21967.cljs$core$IFn$_invoke$arity$variadic = G__21967__delegate;
return G__21967;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21970__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21971__i = 0, G__21971__a = new Array(arguments.length -  0);
while (G__21971__i < G__21971__a.length) {G__21971__a[G__21971__i] = arguments[G__21971__i + 0]; ++G__21971__i;}
  args = new cljs.core.IndexedSeq(G__21971__a,0);
} 
return G__21970__delegate.call(this,args);};
G__21970.cljs$lang$maxFixedArity = 0;
G__21970.cljs$lang$applyTo = (function (arglist__21972){
var args = cljs.core.seq(arglist__21972);
return G__21970__delegate(args);
});
G__21970.cljs$core$IFn$_invoke$arity$variadic = G__21970__delegate;
return G__21970;
})()
;

return null;
});
