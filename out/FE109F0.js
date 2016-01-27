goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__335965__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__335965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__335966__i = 0, G__335966__a = new Array(arguments.length -  0);
while (G__335966__i < G__335966__a.length) {G__335966__a[G__335966__i] = arguments[G__335966__i + 0]; ++G__335966__i;}
  args = new cljs.core.IndexedSeq(G__335966__a,0);
} 
return G__335965__delegate.call(this,args);};
G__335965.cljs$lang$maxFixedArity = 0;
G__335965.cljs$lang$applyTo = (function (arglist__335967){
var args = cljs.core.seq(arglist__335967);
return G__335965__delegate(args);
});
G__335965.cljs$core$IFn$_invoke$arity$variadic = G__335965__delegate;
return G__335965;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__335968__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__335968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__335969__i = 0, G__335969__a = new Array(arguments.length -  0);
while (G__335969__i < G__335969__a.length) {G__335969__a[G__335969__i] = arguments[G__335969__i + 0]; ++G__335969__i;}
  args = new cljs.core.IndexedSeq(G__335969__a,0);
} 
return G__335968__delegate.call(this,args);};
G__335968.cljs$lang$maxFixedArity = 0;
G__335968.cljs$lang$applyTo = (function (arglist__335970){
var args = cljs.core.seq(arglist__335970);
return G__335968__delegate(args);
});
G__335968.cljs$core$IFn$_invoke$arity$variadic = G__335968__delegate;
return G__335968;
})()
;

return null;
});
