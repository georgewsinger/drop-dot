goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__128424__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__128424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128425__i = 0, G__128425__a = new Array(arguments.length -  0);
while (G__128425__i < G__128425__a.length) {G__128425__a[G__128425__i] = arguments[G__128425__i + 0]; ++G__128425__i;}
  args = new cljs.core.IndexedSeq(G__128425__a,0);
} 
return G__128424__delegate.call(this,args);};
G__128424.cljs$lang$maxFixedArity = 0;
G__128424.cljs$lang$applyTo = (function (arglist__128426){
var args = cljs.core.seq(arglist__128426);
return G__128424__delegate(args);
});
G__128424.cljs$core$IFn$_invoke$arity$variadic = G__128424__delegate;
return G__128424;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__128427__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__128427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__128428__i = 0, G__128428__a = new Array(arguments.length -  0);
while (G__128428__i < G__128428__a.length) {G__128428__a[G__128428__i] = arguments[G__128428__i + 0]; ++G__128428__i;}
  args = new cljs.core.IndexedSeq(G__128428__a,0);
} 
return G__128427__delegate.call(this,args);};
G__128427.cljs$lang$maxFixedArity = 0;
G__128427.cljs$lang$applyTo = (function (arglist__128429){
var args = cljs.core.seq(arglist__128429);
return G__128427__delegate(args);
});
G__128427.cljs$core$IFn$_invoke$arity$variadic = G__128427__delegate;
return G__128427;
})()
;

return null;
});
