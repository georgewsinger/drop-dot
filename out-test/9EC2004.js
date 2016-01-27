goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31057__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31058__i = 0, G__31058__a = new Array(arguments.length -  0);
while (G__31058__i < G__31058__a.length) {G__31058__a[G__31058__i] = arguments[G__31058__i + 0]; ++G__31058__i;}
  args = new cljs.core.IndexedSeq(G__31058__a,0);
} 
return G__31057__delegate.call(this,args);};
G__31057.cljs$lang$maxFixedArity = 0;
G__31057.cljs$lang$applyTo = (function (arglist__31059){
var args = cljs.core.seq(arglist__31059);
return G__31057__delegate(args);
});
G__31057.cljs$core$IFn$_invoke$arity$variadic = G__31057__delegate;
return G__31057;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31060__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31061__i = 0, G__31061__a = new Array(arguments.length -  0);
while (G__31061__i < G__31061__a.length) {G__31061__a[G__31061__i] = arguments[G__31061__i + 0]; ++G__31061__i;}
  args = new cljs.core.IndexedSeq(G__31061__a,0);
} 
return G__31060__delegate.call(this,args);};
G__31060.cljs$lang$maxFixedArity = 0;
G__31060.cljs$lang$applyTo = (function (arglist__31062){
var args = cljs.core.seq(arglist__31062);
return G__31060__delegate(args);
});
G__31060.cljs$core$IFn$_invoke$arity$variadic = G__31060__delegate;
return G__31060;
})()
;

return null;
});
