goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46023__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46024__i = 0, G__46024__a = new Array(arguments.length -  0);
while (G__46024__i < G__46024__a.length) {G__46024__a[G__46024__i] = arguments[G__46024__i + 0]; ++G__46024__i;}
  args = new cljs.core.IndexedSeq(G__46024__a,0);
} 
return G__46023__delegate.call(this,args);};
G__46023.cljs$lang$maxFixedArity = 0;
G__46023.cljs$lang$applyTo = (function (arglist__46025){
var args = cljs.core.seq(arglist__46025);
return G__46023__delegate(args);
});
G__46023.cljs$core$IFn$_invoke$arity$variadic = G__46023__delegate;
return G__46023;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46026__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46027__i = 0, G__46027__a = new Array(arguments.length -  0);
while (G__46027__i < G__46027__a.length) {G__46027__a[G__46027__i] = arguments[G__46027__i + 0]; ++G__46027__i;}
  args = new cljs.core.IndexedSeq(G__46027__a,0);
} 
return G__46026__delegate.call(this,args);};
G__46026.cljs$lang$maxFixedArity = 0;
G__46026.cljs$lang$applyTo = (function (arglist__46028){
var args = cljs.core.seq(arglist__46028);
return G__46026__delegate(args);
});
G__46026.cljs$core$IFn$_invoke$arity$variadic = G__46026__delegate;
return G__46026;
})()
;

return null;
});
