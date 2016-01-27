goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__305142__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__305142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305143__i = 0, G__305143__a = new Array(arguments.length -  0);
while (G__305143__i < G__305143__a.length) {G__305143__a[G__305143__i] = arguments[G__305143__i + 0]; ++G__305143__i;}
  args = new cljs.core.IndexedSeq(G__305143__a,0);
} 
return G__305142__delegate.call(this,args);};
G__305142.cljs$lang$maxFixedArity = 0;
G__305142.cljs$lang$applyTo = (function (arglist__305144){
var args = cljs.core.seq(arglist__305144);
return G__305142__delegate(args);
});
G__305142.cljs$core$IFn$_invoke$arity$variadic = G__305142__delegate;
return G__305142;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__305145__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__305145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305146__i = 0, G__305146__a = new Array(arguments.length -  0);
while (G__305146__i < G__305146__a.length) {G__305146__a[G__305146__i] = arguments[G__305146__i + 0]; ++G__305146__i;}
  args = new cljs.core.IndexedSeq(G__305146__a,0);
} 
return G__305145__delegate.call(this,args);};
G__305145.cljs$lang$maxFixedArity = 0;
G__305145.cljs$lang$applyTo = (function (arglist__305147){
var args = cljs.core.seq(arglist__305147);
return G__305145__delegate(args);
});
G__305145.cljs$core$IFn$_invoke$arity$variadic = G__305145__delegate;
return G__305145;
})()
;

return null;
});
