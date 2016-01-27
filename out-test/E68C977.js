goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__81321__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__81321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81322__i = 0, G__81322__a = new Array(arguments.length -  0);
while (G__81322__i < G__81322__a.length) {G__81322__a[G__81322__i] = arguments[G__81322__i + 0]; ++G__81322__i;}
  args = new cljs.core.IndexedSeq(G__81322__a,0);
} 
return G__81321__delegate.call(this,args);};
G__81321.cljs$lang$maxFixedArity = 0;
G__81321.cljs$lang$applyTo = (function (arglist__81323){
var args = cljs.core.seq(arglist__81323);
return G__81321__delegate(args);
});
G__81321.cljs$core$IFn$_invoke$arity$variadic = G__81321__delegate;
return G__81321;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__81324__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__81324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81325__i = 0, G__81325__a = new Array(arguments.length -  0);
while (G__81325__i < G__81325__a.length) {G__81325__a[G__81325__i] = arguments[G__81325__i + 0]; ++G__81325__i;}
  args = new cljs.core.IndexedSeq(G__81325__a,0);
} 
return G__81324__delegate.call(this,args);};
G__81324.cljs$lang$maxFixedArity = 0;
G__81324.cljs$lang$applyTo = (function (arglist__81326){
var args = cljs.core.seq(arglist__81326);
return G__81324__delegate(args);
});
G__81324.cljs$core$IFn$_invoke$arity$variadic = G__81324__delegate;
return G__81324;
})()
;

return null;
});
