goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__286893__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__286893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286894__i = 0, G__286894__a = new Array(arguments.length -  0);
while (G__286894__i < G__286894__a.length) {G__286894__a[G__286894__i] = arguments[G__286894__i + 0]; ++G__286894__i;}
  args = new cljs.core.IndexedSeq(G__286894__a,0);
} 
return G__286893__delegate.call(this,args);};
G__286893.cljs$lang$maxFixedArity = 0;
G__286893.cljs$lang$applyTo = (function (arglist__286895){
var args = cljs.core.seq(arglist__286895);
return G__286893__delegate(args);
});
G__286893.cljs$core$IFn$_invoke$arity$variadic = G__286893__delegate;
return G__286893;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__286896__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__286896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286897__i = 0, G__286897__a = new Array(arguments.length -  0);
while (G__286897__i < G__286897__a.length) {G__286897__a[G__286897__i] = arguments[G__286897__i + 0]; ++G__286897__i;}
  args = new cljs.core.IndexedSeq(G__286897__a,0);
} 
return G__286896__delegate.call(this,args);};
G__286896.cljs$lang$maxFixedArity = 0;
G__286896.cljs$lang$applyTo = (function (arglist__286898){
var args = cljs.core.seq(arglist__286898);
return G__286896__delegate(args);
});
G__286896.cljs$core$IFn$_invoke$arity$variadic = G__286896__delegate;
return G__286896;
})()
;

return null;
});
