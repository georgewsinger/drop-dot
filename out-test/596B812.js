goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16940__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16941__i = 0, G__16941__a = new Array(arguments.length -  0);
while (G__16941__i < G__16941__a.length) {G__16941__a[G__16941__i] = arguments[G__16941__i + 0]; ++G__16941__i;}
  args = new cljs.core.IndexedSeq(G__16941__a,0);
} 
return G__16940__delegate.call(this,args);};
G__16940.cljs$lang$maxFixedArity = 0;
G__16940.cljs$lang$applyTo = (function (arglist__16942){
var args = cljs.core.seq(arglist__16942);
return G__16940__delegate(args);
});
G__16940.cljs$core$IFn$_invoke$arity$variadic = G__16940__delegate;
return G__16940;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16943__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16944__i = 0, G__16944__a = new Array(arguments.length -  0);
while (G__16944__i < G__16944__a.length) {G__16944__a[G__16944__i] = arguments[G__16944__i + 0]; ++G__16944__i;}
  args = new cljs.core.IndexedSeq(G__16944__a,0);
} 
return G__16943__delegate.call(this,args);};
G__16943.cljs$lang$maxFixedArity = 0;
G__16943.cljs$lang$applyTo = (function (arglist__16945){
var args = cljs.core.seq(arglist__16945);
return G__16943__delegate(args);
});
G__16943.cljs$core$IFn$_invoke$arity$variadic = G__16943__delegate;
return G__16943;
})()
;

return null;
});
