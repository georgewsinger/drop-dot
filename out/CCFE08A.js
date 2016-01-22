goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22983__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22984__i = 0, G__22984__a = new Array(arguments.length -  0);
while (G__22984__i < G__22984__a.length) {G__22984__a[G__22984__i] = arguments[G__22984__i + 0]; ++G__22984__i;}
  args = new cljs.core.IndexedSeq(G__22984__a,0);
} 
return G__22983__delegate.call(this,args);};
G__22983.cljs$lang$maxFixedArity = 0;
G__22983.cljs$lang$applyTo = (function (arglist__22985){
var args = cljs.core.seq(arglist__22985);
return G__22983__delegate(args);
});
G__22983.cljs$core$IFn$_invoke$arity$variadic = G__22983__delegate;
return G__22983;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22986__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22987__i = 0, G__22987__a = new Array(arguments.length -  0);
while (G__22987__i < G__22987__a.length) {G__22987__a[G__22987__i] = arguments[G__22987__i + 0]; ++G__22987__i;}
  args = new cljs.core.IndexedSeq(G__22987__a,0);
} 
return G__22986__delegate.call(this,args);};
G__22986.cljs$lang$maxFixedArity = 0;
G__22986.cljs$lang$applyTo = (function (arglist__22988){
var args = cljs.core.seq(arglist__22988);
return G__22986__delegate(args);
});
G__22986.cljs$core$IFn$_invoke$arity$variadic = G__22986__delegate;
return G__22986;
})()
;

return null;
});
