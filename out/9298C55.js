goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24925__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24926__i = 0, G__24926__a = new Array(arguments.length -  0);
while (G__24926__i < G__24926__a.length) {G__24926__a[G__24926__i] = arguments[G__24926__i + 0]; ++G__24926__i;}
  args = new cljs.core.IndexedSeq(G__24926__a,0);
} 
return G__24925__delegate.call(this,args);};
G__24925.cljs$lang$maxFixedArity = 0;
G__24925.cljs$lang$applyTo = (function (arglist__24927){
var args = cljs.core.seq(arglist__24927);
return G__24925__delegate(args);
});
G__24925.cljs$core$IFn$_invoke$arity$variadic = G__24925__delegate;
return G__24925;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24928__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24929__i = 0, G__24929__a = new Array(arguments.length -  0);
while (G__24929__i < G__24929__a.length) {G__24929__a[G__24929__i] = arguments[G__24929__i + 0]; ++G__24929__i;}
  args = new cljs.core.IndexedSeq(G__24929__a,0);
} 
return G__24928__delegate.call(this,args);};
G__24928.cljs$lang$maxFixedArity = 0;
G__24928.cljs$lang$applyTo = (function (arglist__24930){
var args = cljs.core.seq(arglist__24930);
return G__24928__delegate(args);
});
G__24928.cljs$core$IFn$_invoke$arity$variadic = G__24928__delegate;
return G__24928;
})()
;

return null;
});
