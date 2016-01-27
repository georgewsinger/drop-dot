goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__92903__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__92903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92904__i = 0, G__92904__a = new Array(arguments.length -  0);
while (G__92904__i < G__92904__a.length) {G__92904__a[G__92904__i] = arguments[G__92904__i + 0]; ++G__92904__i;}
  args = new cljs.core.IndexedSeq(G__92904__a,0);
} 
return G__92903__delegate.call(this,args);};
G__92903.cljs$lang$maxFixedArity = 0;
G__92903.cljs$lang$applyTo = (function (arglist__92905){
var args = cljs.core.seq(arglist__92905);
return G__92903__delegate(args);
});
G__92903.cljs$core$IFn$_invoke$arity$variadic = G__92903__delegate;
return G__92903;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__92906__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__92906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92907__i = 0, G__92907__a = new Array(arguments.length -  0);
while (G__92907__i < G__92907__a.length) {G__92907__a[G__92907__i] = arguments[G__92907__i + 0]; ++G__92907__i;}
  args = new cljs.core.IndexedSeq(G__92907__a,0);
} 
return G__92906__delegate.call(this,args);};
G__92906.cljs$lang$maxFixedArity = 0;
G__92906.cljs$lang$applyTo = (function (arglist__92908){
var args = cljs.core.seq(arglist__92908);
return G__92906__delegate(args);
});
G__92906.cljs$core$IFn$_invoke$arity$variadic = G__92906__delegate;
return G__92906;
})()
;

return null;
});
