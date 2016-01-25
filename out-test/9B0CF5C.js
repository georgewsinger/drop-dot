goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12347__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12348__i = 0, G__12348__a = new Array(arguments.length -  0);
while (G__12348__i < G__12348__a.length) {G__12348__a[G__12348__i] = arguments[G__12348__i + 0]; ++G__12348__i;}
  args = new cljs.core.IndexedSeq(G__12348__a,0);
} 
return G__12347__delegate.call(this,args);};
G__12347.cljs$lang$maxFixedArity = 0;
G__12347.cljs$lang$applyTo = (function (arglist__12349){
var args = cljs.core.seq(arglist__12349);
return G__12347__delegate(args);
});
G__12347.cljs$core$IFn$_invoke$arity$variadic = G__12347__delegate;
return G__12347;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12350__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12351__i = 0, G__12351__a = new Array(arguments.length -  0);
while (G__12351__i < G__12351__a.length) {G__12351__a[G__12351__i] = arguments[G__12351__i + 0]; ++G__12351__i;}
  args = new cljs.core.IndexedSeq(G__12351__a,0);
} 
return G__12350__delegate.call(this,args);};
G__12350.cljs$lang$maxFixedArity = 0;
G__12350.cljs$lang$applyTo = (function (arglist__12352){
var args = cljs.core.seq(arglist__12352);
return G__12350__delegate(args);
});
G__12350.cljs$core$IFn$_invoke$arity$variadic = G__12350__delegate;
return G__12350;
})()
;

return null;
});
