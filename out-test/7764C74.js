goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25313__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25314__i = 0, G__25314__a = new Array(arguments.length -  0);
while (G__25314__i < G__25314__a.length) {G__25314__a[G__25314__i] = arguments[G__25314__i + 0]; ++G__25314__i;}
  args = new cljs.core.IndexedSeq(G__25314__a,0);
} 
return G__25313__delegate.call(this,args);};
G__25313.cljs$lang$maxFixedArity = 0;
G__25313.cljs$lang$applyTo = (function (arglist__25315){
var args = cljs.core.seq(arglist__25315);
return G__25313__delegate(args);
});
G__25313.cljs$core$IFn$_invoke$arity$variadic = G__25313__delegate;
return G__25313;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25316__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25317__i = 0, G__25317__a = new Array(arguments.length -  0);
while (G__25317__i < G__25317__a.length) {G__25317__a[G__25317__i] = arguments[G__25317__i + 0]; ++G__25317__i;}
  args = new cljs.core.IndexedSeq(G__25317__a,0);
} 
return G__25316__delegate.call(this,args);};
G__25316.cljs$lang$maxFixedArity = 0;
G__25316.cljs$lang$applyTo = (function (arglist__25318){
var args = cljs.core.seq(arglist__25318);
return G__25316__delegate(args);
});
G__25316.cljs$core$IFn$_invoke$arity$variadic = G__25316__delegate;
return G__25316;
})()
;

return null;
});
